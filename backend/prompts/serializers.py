from .models import Prompt

def serialize_prompt(prompt: Prompt, view_count: int = None):
    return {
        "id": str(prompt.id),
        "title": prompt.title,
        "content": prompt.content,
        "complexity": prompt.complexity,
        "created_at": prompt.created_at.isoformat(),
        "view_count": view_count
    }

def serialize_prompt_list(prompts):
    return [
        {
            "id": str(p.id),
            "title": p.title,
            "complexity": p.complexity
        }
        for p in prompts
    ]