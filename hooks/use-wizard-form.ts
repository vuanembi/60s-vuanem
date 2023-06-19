import { useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export type GetProductsFormValues = {
    question1: string;
    question2: string;
    question31: string;
    question32: string;
    question33: string;
    question34: string;
    question4: string;
    question5: string;
    question6: string;
    question7: string;
};

export type GetProductsBody = {
    cat: string;
    size: string;
};

export type Product = {
    name: string;
    slug: string;
    imageSrc: string;
};

export type GetProductResponse = {
    data: {
        name: string;
        slug: string;
        image_path: string;
    }[];
};

export const useGetProducts = (body: GetProductsBody, enabled: boolean) => {
    return useQuery<Product[]>({
        queryKey: ['products', body],
        queryFn: async () => {
            return axios
                .request<GetProductResponse>({
                    method: 'POST',
                    url: 'https://vuanem.com/api/get-product-survey-60s',
                    data: body,
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
        staleTime: Infinity,
        refetchIntervalInBackground: false,
        enabled,
    });
};
