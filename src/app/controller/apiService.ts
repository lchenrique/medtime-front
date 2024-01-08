const api = {
  post: async (url: string, params: any) => {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(params),
    });

    return await res.json();
  },
};

export { api };
