from root.auth.currentUser import CurrentUser
from root.auth.login import Login, SaveUser
from . import auth_api
from root.auth.signup import UserSignupForm



auth_api.add_resource(Login, "/login")
auth_api.add_resource(CurrentUser, "/user")
auth_api.add_resource(SaveUser, "/save/user")

auth_api.add_resource(UserSignupForm, "/user/signup")