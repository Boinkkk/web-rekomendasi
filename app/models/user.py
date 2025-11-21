# app/models.py

from sqlalchemy import Column, Integer, String, DateTime, func
from core.database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255))
    email = Column(String(255), unique=True, index=True)
    password_hash = Column(String(255))
    role = Column(String(50))
    created_at = Column(DateTime, server_default=func.now())
