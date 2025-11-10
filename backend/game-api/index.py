"""
Business: API для сохранения и загрузки прогресса игрока в Mirror World
Args: event - dict с httpMethod, body, queryStringParameters
      context - объект с атрибутами request_id, function_name
Returns: HTTP response dict с данными игрока или результатом операции
"""

import json
import os
import psycopg2
from psycopg2.extras import RealDictCursor
from typing import Dict, Any

def get_db_connection():
    database_url = os.environ.get('DATABASE_URL')
    return psycopg2.connect(database_url, cursor_factory=RealDictCursor)

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Player-Id',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    conn = get_db_connection()
    cur = conn.cursor()
    
    if method == 'POST':
        body_data = json.loads(event.get('body', '{}'))
        name = body_data.get('name', 'Игрок')
        
        cur.execute(
            "INSERT INTO players (name) VALUES (%s) RETURNING id, name, money, job, position_x, position_y, position_z",
            (name,)
        )
        player = cur.fetchone()
        conn.commit()
        
        result = {
            'id': player['id'],
            'name': player['name'],
            'money': player['money'],
            'job': player['job'],
            'position': [player['position_x'], player['position_y'], player['position_z']],
            'buildings': []
        }
        
        cur.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps(result)
        }
    
    if method == 'GET':
        params = event.get('queryStringParameters', {})
        player_id = params.get('id')
        
        if not player_id:
            cur.close()
            conn.close()
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'isBase64Encoded': False,
                'body': json.dumps({'error': 'Player ID required'})
            }
        
        cur.execute(
            "SELECT id, name, money, job, position_x, position_y, position_z FROM players WHERE id = %s",
            (player_id,)
        )
        player = cur.fetchone()
        
        if not player:
            cur.close()
            conn.close()
            return {
                'statusCode': 404,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'isBase64Encoded': False,
                'body': json.dumps({'error': 'Player not found'})
            }
        
        cur.execute(
            "SELECT building_type, position_x, position_y, position_z FROM buildings WHERE player_id = %s",
            (player_id,)
        )
        buildings_raw = cur.fetchall()
        
        buildings = [
            {
                'type': b['building_type'],
                'position': [b['position_x'], b['position_y'], b['position_z']]
            }
            for b in buildings_raw
        ]
        
        result = {
            'id': player['id'],
            'name': player['name'],
            'money': player['money'],
            'job': player['job'],
            'position': [player['position_x'], player['position_y'], player['position_z']],
            'buildings': buildings
        }
        
        cur.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps(result)
        }
    
    if method == 'PUT':
        body_data = json.loads(event.get('body', '{}'))
        player_id = body_data.get('id')
        
        if not player_id:
            cur.close()
            conn.close()
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'isBase64Encoded': False,
                'body': json.dumps({'error': 'Player ID required'})
            }
        
        money = body_data.get('money')
        job = body_data.get('job')
        building = body_data.get('building')
        
        if money is not None:
            cur.execute("UPDATE players SET money = %s, updated_at = CURRENT_TIMESTAMP WHERE id = %s", (money, player_id))
        
        if job is not None:
            cur.execute("UPDATE players SET job = %s, updated_at = CURRENT_TIMESTAMP WHERE id = %s", (job, player_id))
        
        if building:
            cur.execute(
                "INSERT INTO buildings (player_id, building_type, position_x, position_y, position_z) VALUES (%s, %s, %s, %s, %s)",
                (player_id, building['type'], building['position'][0], building['position'][1], building['position'][2])
            )
        
        conn.commit()
        cur.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'success': True})
        }
    
    return {
        'statusCode': 405,
        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        'isBase64Encoded': False,
        'body': json.dumps({'error': 'Method not allowed'})
    }
