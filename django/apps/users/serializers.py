from todos.serializers import TodoSerializer

from rest_framework import serializers

from .models import User


class UserSerializer(serializers.ModelSerializer):

	class Meta:
		model = User
		fields = ['username', 'email']


class UserWithTodosSerializer(serializers.ModelSerializer):
	todos = TodoSerializer(many=True, read_only=True)

	class Meta:
		model = User
		fields = ['username', 'email', 'todos']
