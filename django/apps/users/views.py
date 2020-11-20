import os

from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import UserSerializer


class Logout(APIView):

	def post(self, request):
		cookie = os.getenv('JWT_AUTH_COOKIE')

		response = Response()
		response.set_cookie(cookie, '', max_age=0)

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


logout = Logout.as_view()
user_data = UserData.as_view()
