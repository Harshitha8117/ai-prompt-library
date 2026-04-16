import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import Prompt
from .serializers import serialize_prompt, serialize_prompt_list
from .services import increment_view
from .utils import validate_prompt_data, parse_json


# GET /prompts/
def list_prompts(request):
    prompts = Prompt.objects.all().order_by('-created_at')
    data = serialize_prompt_list(prompts)
    return JsonResponse(data, safe=False)


# POST /prompts/
@csrf_exempt
def create_prompt(request):
    if request.method != "POST":
        return JsonResponse({"error": "Invalid method"}, status=405)

    data = parse_json(request)

    if data is None:
        return JsonResponse({"error": "Invalid JSON"}, status=400)

    # ✅ clean validation layer
    errors = validate_prompt_data(data)
    if errors:
        return JsonResponse({"errors": errors}, status=400)

    try:
        prompt = Prompt.objects.create(
            title=data["title"].strip(),
            content=data["content"].strip(),
            complexity=int(data["complexity"])
        )

        return JsonResponse({"id": str(prompt.id)}, status=201)

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)


# GET /prompts/:id/
def get_prompt(request, id):
    try:
        prompt = Prompt.objects.get(id=id)

        # ✅ Redis = source of truth
        view_count = increment_view(str(id))

        data = serialize_prompt(prompt, view_count=view_count)
        return JsonResponse(data)

    except Prompt.DoesNotExist:
        return JsonResponse({"error": "Not found"}, status=404)