from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serilizers import UserSerilizer, RegisterSerilizer, LoginSerilizer

# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerilizer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerilizer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })
    
# Login API
class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerilizer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerilizer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })
    
# Get User API
class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerilizer

    def get_object(self):
        return self.request.user
