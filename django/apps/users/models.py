import uuid

from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
	id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)


	class Meta:
		verbose_name_plural = 'CustomUser'
