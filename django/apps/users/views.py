import os

from rest_framework.views import APIView
from rest_framework.response import Response


class Logout(APIView):

	def post(self, request):
		cookie = os.getenv('JWT_AUTH_COOKIE')

		response = Response()
		response.set_cookie(cookie, '', max_age=0)

		return response


class UserData(APIView):

	def get(self, request):
		data = {
			'name': request.user.username,
			'email': request.user.email,
		}

		return Response(data)


logout = Logout.as_view()
user_data = UserData.as_view()
