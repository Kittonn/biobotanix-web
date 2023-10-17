import axiosInstance from "./api.service";

export const uploadService = {
    uploadFileService: async (file: File) => {
        try {
            const formData = new FormData();
            formData.append('file', file);
            const response = await axiosInstance.post('/predict', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return response.data;
        } catch (error) {
            const message = (error as Error).message;
            throw new Error(message);
        }
    }
}