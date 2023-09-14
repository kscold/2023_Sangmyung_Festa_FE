import axios from 'axios';

export const fetchCount = async () => {
  const url = 'https://b5a7d179-1cf6-49ed-80be-9342575e6646.mock.pstmn.io';
  try {
    const response = await axios.get(`${url}/api/visitor/count`);
    return response.data.count; // 데이터는 response.data 안에 들어있습니다.
  } catch (e) {
    console.error(e);
    return null;
  }
}

