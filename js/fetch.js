export const fetchApi = async (url, func1, func2) => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const data = result.data;

    func1(data);
    func2(data);
  } catch (error) {
    console.log(error);
  }
};
