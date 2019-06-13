export interface RepositoriosSearch {
    items: items[];
}
export interface items {
    id: number,
    name: string,
    full_name: string,
    private: boolean,
    owner: {
        login: string,
        id: number,
        avatar_url: string,
        gravatar_id: string,
        url: string,
        html_url: string,
        repos_url: string,
    },
    html_url: string,
    description: string,
    fork: boolean,
    url: string,
}
