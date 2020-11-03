from django.core.management.utils import get_random_secret_key

key = get_random_secret_key()
print('SECRET_KEY=' + key)
