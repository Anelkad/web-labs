from .views import companies_list, company_detail, company_vacancies, vacancies_list, vacancies_top_ten, vacancy_detail, CompanyListView, CompanyDetailView
from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('login/', obtain_jwt_token),
    #path('companies/', companies_list),
    path('companies/',CompanyListView.as_view()),
    #path('companies/<int:company_id>/', company_detail),
    path('companies/<int:pk>/', CompanyDetailView.as_view()),
    path('companies/<int:company_id>/vacancies/', company_vacancies),
    path('vacancies/', vacancies_list),
    path('vacancies/<int:vacancy_id>/', vacancy_detail),
    path('vacancies/top_ten/', vacancies_top_ten),
]