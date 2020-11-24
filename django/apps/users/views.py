from datetime import datetime

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_jwt.views import ObtainJSONWebToken

from django.conf import settings

from .serializers import UserSerializer

jwt_config = getattr(settings, 'JWT_AUTH')


class Login(ObtainJSONWebToken):

	def post(self, request, *args, **kwargs):
		delta = jwt_config.get('JWT_EXPIRATION_DELTA')
		expiration = datetime.utcnow() + delta

		response = super().post(request)
		response.set_cookie(
			'isAuthenticated',
			True,
			expires=expiration
		)

		return response


class Logout(APIView):

	def post(self, request):
		cookie = jwt_config.get('JWT_AUTH_COOKIE')

		response = Response()
		response.set_cookie(cookie, '', max_age=0)
		response.set_cookie('isAuthenticated', False, max_age=0)

		return response


class UserData(APIView):

	def get(self, request):
		user = request.user
		data = UserSerializer(user).data

		response = Response({
			'name': data.get('username'),
			'email': data.get('email'),
			'todos': data.get('todos'),
		})

		return response


login = Login.as_view()
logout = Logout.as_view()
user_data = UserData.as_view()
