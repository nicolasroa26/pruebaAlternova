export const API_BASE_URL = 'https://1be9db56-c889-466d-9c12-cba178414901.mock.pstmn.io/';
export const API_URL_PATH = {
    products: "all-products",
    detail: (_, detail_id) => `pdm/${detail_id}`,
    buy: "buy"
};