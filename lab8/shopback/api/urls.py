from django.urls import path
from api.views import product_list, product_detail, category_detail, category_list

urlpatterns = [
    path('products/',product_list),
    path('products/<int:id>/',product_detail),
    path('categories/', category_list),
    path('categories/<int:id>/', category_detail),
    path('categories/<int:id>/products/', category_list)
]