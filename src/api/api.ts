import axios from 'axios'

type Response<T> = {
    data: {
        content: T
        metadata: any
    }
    message: string
    status: string
}

type ContentResponse<S> = {
    fields: S
    metadata: any
    sys: {
        createdAt: string
        id: string
        locale: string
        type: string
        updatedAt: string
    }
}[]

type RecipeSchema = {
    cookingSteps: any
    ingredients: string[]
    title: string
}

export type RecipeResponse = ContentResponse<RecipeSchema>

export const getRecipes = async (): Promise<Response<RecipeResponse>> => {
    return axios.get(`${import.meta.env.VITE_BE_HOST}/recipes`)
}
