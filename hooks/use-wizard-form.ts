import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export type GetProductsFormValues = {
    question1: string;
    question2: string;
    question3: string;
    question4: string;
    question5: string;
    question6: string;
};

export type GetProductsBody = {
    cat: string;
    size: string;
};

export type Product = {
    name: string;
    slug: string;
    image_path: string;
};

export type GetProductResponse = {
    data: Product[];
};

export const useGetProducts = (data: GetProductsBody) => {
    return useQuery({
        queryKey: ['products', data],
        queryFn: async () => {
            return axios
                .request<GetProductResponse>({
                    method: 'POST',
                    url: 'https://vuanem.com/api/get-product-survey-60s',
                    data,
                })
                .then((response) => response.data)
                .then((data) => {
                    return data.data
                        .map((item) => ({
                            name: item.name,
                            slug: item.slug,
                            imageSrc: item.image_path.replace(
                                'public',
                                'https://vuanem.com/storage',
                            ),
                        }))
                        .slice(0, 6);
                });
        },
    });
};
