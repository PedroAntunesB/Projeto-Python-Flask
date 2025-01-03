from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase

class User(DeclarativeBase):
  pass

db = SQLAlchemy(model_class=User)