from rest_framework.routers import SimpleRouter
from .views import ModsView

router = SimpleRouter()

router.register(r'mods', ModsView, basename='mods_view')

urlpatterns = router.urls