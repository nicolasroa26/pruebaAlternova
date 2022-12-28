export const API_BASE_URL = 'https://525aa86b-e6ee-4e67-bbdf-f4d543d5701a.mock.pstmn.io/';
export const API_URL_PATH = {
    products: "all-products",
    detail: (_, detail_id) => `pdm/${detail_id}`,
    buy: "buy"
};