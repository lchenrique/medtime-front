import data from "./medicamentos.json";

function uniq(arr: any) {
  return arr.filter((item:any, index:any) => arr.indexOf(item) === index);
}

export const suggestionsMeds = async (text: string) => {
  return new Promise<string[]>(async (resolve, reject) => {
    const dataSuggestions = [...(data as any[])];
    const suggestionsData = dataSuggestions

    let suggestions: any[] = [];
    for (let i = 0; i < suggestionsData.length; i++) {
      const suggestion = suggestionsData[i];
      if (text.length > 3 && suggestion.nome.toLowerCase().includes(text.toLowerCase())) {
        suggestions.push(suggestion.nome);
      }
    }
    resolve(uniq(suggestions) || []);
  });
};
