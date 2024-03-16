import random
import string
from flask import jsonify, request
from flask_restful import Resource
from flask_jwt_extended import create_access_token

from root.db import get_mongo_db

mdb = get_mongo_db()

class UserSignupForm(Resource):
    def post(self):
        input = request.get_json(force=True)
        print('input: ', input)
        
        mdb.users.insert_one(input)


        return {
            "status": "success",
            "cls": "success",
            "msg": "Registered Successfully!..",
            "playload": {},
        }
