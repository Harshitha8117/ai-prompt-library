def validate_prompt_data(data):
    errors = {}

    title = data.get("title", "").strip()
    content = data.get("content", "").strip()
    complexity = data.get("complexity")

    if len(title) < 3:
        errors["title"] = "Must be at least 3 characters"

    if len(content) < 20:
        errors["content"] = "Must be at least 20 characters"

    try:
        complexity = int(complexity)
        if not (1 <= complexity <= 10):
            errors["complexity"] = "Must be between 1 and 10"
    except:
        errors["complexity"] = "Must be a number"

    return errors


def parse_json(request):
    import json
    try:
        return json.loads(request.body)
    except:
        return None