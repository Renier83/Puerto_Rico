import os

# # impointing Dash to help with plotly and using flask
# from dash import Dash
# import dash_core_components as dcc
# import dash_html_components as html
# Heroku check
is_heroku = False
if 'IS_HEROKU' in os.environ:
    is_heroku = True

# Flask
from flask import Flask, request, render_template, jsonify

# SQL Alchemy
import sqlalchemy
from sqlalchemy import create_engine

# PyMySQL
import pymysql

# Pandas
import pandas as pd

# JSON
import json

# Import your config file(s) and variable(s)
if is_heroku == True:
    # if IS_HEROKU is found in the environment variables, then use the rest
    # NOTE: you still need to set up the IS_HEROKU environment variable on Heroku (it is not there by default)
    remote_db_endpoint = os.environ.get('remote_db_endpoint')
    remote_db_port = os.environ.get('remote_db_port')
    remote_db_name = os.environ.get('remote_db_name')
    remote_db_user = os.environ.get('remote_db_user')
    remote_db_pwd = os.environ.get('remote_db_pwd')
else:
    # use the config.py file if IS_HEROKU is not detected
    from config import remote_db_endpoint, remote_db_port, remote_db_name, remote_db_user, remote_db_pwd

# Configure MySQL connection and connect 
pymysql.install_as_MySQLdb()
engine = create_engine(f"mysql://{remote_db_user}:{remote_db_pwd}@{remote_db_endpoint}:{remote_db_port}/{remote_db_name}")

# Initialize Flask application
app = Flask(__name__)

# Set up your default route
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/SanJuan')
@app.route('/SanJuan.html')
def Sanjuan():
    return render_template('SanJuan.html')


@app.route('/Ponce')
@app.route('/Ponce.html')
def Ponce():
    return render_template('Ponce.html')

@app.route('/Fajardo')
@app.route('/Fajardo.html')
def Fajardo():
    return render_template('Fajardo.html')

@app.route('/Rincon')
@app.route('/Rincon.html')
def Rincon():
    return render_template('Rincon.html')

@app.route('/Arecibo')
@app.route('/Arecibo.html')
def Arecibo():
    return render_template('Arecibo.html')

@app.route('/Humacao')
@app.route('/Humacao.html')
def Humacao():
    return render_template('Humacao.html')

@app.route('/Mayaguez')
@app.route('/Mayague.html')
def Mayaguez():
    return render_template('Mayaguez.html')


# set up the data route
@app.route('/api/restaurants')
def get_restaurants():

    # Establish DB connection
    conn = engine.connect()
    
    query = '''
        SELECT
            *
        FROM
            restaurants_new
        '''
    
    resturants_data = pd.read_sql(query, con=conn)
    resturants_json = resturants_data.to_json(orient='records')

    conn.close()
    return resturants_json

if __name__ == "__main__":
    app.run(debug=True)

#     # dash code to work in html and import flask into it

#     app = Dash(
#     __name__,
#     external_stylesheets=['/static/css/style.css'],
#     external_scripts=external_scripts,
#     routes_pathname_prefix='/dash/'
# )
# #still need to figure this part out
# app.layout = html.Div(id='example-div-element')


# if __name__ == '__main__':
#     app.run_server(debug=True)