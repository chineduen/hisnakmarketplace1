import { ref, computed, onMounted } from 'vue';
import { authAPI } from '../services/api';

const user = ref(null);
const loading = ref(true);
const token = ref(localStorage.getItem('token'));

export const useAuth = () => {
  const isAuthenticated = computed(() => !!user.value);
  const isAffiliate = computed(() => user.value?.role === 'affiliate');
  const isVendor = computed(() => user.value?.role === 'vendor');
  const isAdmin = computed(() => user.value?.role === 'admin');

  const loadUser = async () => {
    if (!token.value) {
      loading.value = false;
      return;
    }

    try {
      const response = await authAPI.getProfile();
      user.value = response.data.data;
    } catch (error) {
      console.error('Failed to load user:', error);
      logout();
    } finally {
      loading.value = false;
    }
  };

  const login = async (credentials) => {
    try {
      const response = await authAPI.login(credentials);
      const { user: userData, token: userToken } = response.data.data;
      
      localStorage.setItem('token', userToken);
      token.value = userToken;
      user.value = userData;
      
      return { success: true, user: userData };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Login failed'
      };
    }
  };

  const register = async (userData) => {
    try {
      const response = await authAPI.register(userData);
      const { user: newUser, token: userToken } = response.data.data;
      
      localStorage.setItem('token', userToken);
      token.value = userToken;
      user.value = newUser;
      
      return { success: true, user: newUser };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Registration failed'
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    token.value = null;
    user.value = null;
  };

  const updateUser = (userData) => {
    user.value = { ...user.value, ...userData };
  };

  onMounted(() => {
    loadUser();
  });

  return {
    user: computed(() => user.value),
    loading: computed(() => loading.value),
    isAuthenticated,
    isAffiliate,
    isVendor,
    isAdmin,
    login,
    register,
    logout,
    updateUser,
    loadUser
  };
};