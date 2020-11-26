from rest_framework import serializers

from .models import Todo


class TodoSerializer(serializers.ModelSerializer):

	class Meta:
		model = Todo
		exclude = ['id', 'user']

	def validate(self, attrs):
		user = self.context.get('user')
		attrs['user'] = user

		return attrs

	def create(self, validated_data):
		return Todo.objects.create(**validated_data)
