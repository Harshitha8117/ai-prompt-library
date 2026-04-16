import redis
from django.conf import settings

try:
    redis_client = redis.Redis(
        host=settings.REDIS_HOST,
        port=settings.REDIS_PORT,
        decode_responses=True
    )
    redis_client.ping()
except:
    redis_client = None


def increment_view(prompt_id):
    if not redis_client:
        return 0
    key = f"prompt:{prompt_id}:views"
    return redis_client.incr(key)


def get_view_count(prompt_id):
    if not redis_client:
        return 0
    key = f"prompt:{prompt_id}:views"
    count = redis_client.get(key)
    return int(count) if count else 0