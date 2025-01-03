from flask import Flask
from app.routes_blueprint.routes import route
import config as config

app = Flask(__name__)
app.config.from_object(config)
app.register_blueprint(route)
