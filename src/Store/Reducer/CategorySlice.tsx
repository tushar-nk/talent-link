import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { CreateCategoryAPI, GetAllActiveCategoriesAPI, GetAllCategoriesAPI, GetCategoryByIdAPI, HardDeleteCategoryAPI, SoftDeleteCategoryAPI, UpdateCategoryAPI } from 'src/Apis/Services'
import { AlertEnum } from 'src/@core/utils/Enums'
import { setLoading, setMessage } from './LayoutSice'

const initialState = {
  CreateCategory: {
    data: []
  },
  GetAllCategory: {
    data: []
  },
  SoftDeleteCategory: {
    data: []
  },
  HardDeleteCategory: {
    data: []
  },
  GetCategoryById: {
    data: []
  },
  UpdateCategory: {
    data: []
  },
  ActiveCategories: {
    data: []
  }
}

export const createCategory: any = createAsyncThunk('createCategory', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await CreateCategoryAPI(values)
    dispatch(setLoading(false))
    if (result?.status == 201) {
      return result
    } else {
      throw result
    }
  } catch (error: unknown) {
    dispatch(setLoading(false))
    const errorMessage = (error as Error)?.message || 'An error occurred.'
    dispatch(setMessage({ text: errorMessage, type: AlertEnum.Error }))
    throw error
  }
})

export const getAllCategory: any = createAsyncThunk('getAllCategory', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await GetAllCategoriesAPI(values)
    dispatch(setLoading(false))
    if (result?.status == 200) {
      return result
    } else {
      throw result
    }
  } catch (error: unknown) {
    dispatch(setLoading(false))
    const errorMessage = (error as Error)?.message || 'An error occurred.'
    dispatch(setMessage({ text: errorMessage, type: AlertEnum.Error }))
    throw error
  }
})

export const updateCategory: any = createAsyncThunk('updateCategory', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await UpdateCategoryAPI(values)
    dispatch(setLoading(false))
    if (result?.status == 201) {
      return result
    } else {
      throw result
    }
  } catch (error: unknown) {
    dispatch(setLoading(false))
    const errorMessage = (error as Error)?.message || 'An error occurred.'
    dispatch(setMessage({ text: errorMessage, type: AlertEnum.Error }))
    throw error
  }
})

export const getCategoryById: any = createAsyncThunk('getCategoryById', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await GetCategoryByIdAPI(values)
    dispatch(setLoading(false))
    if (result?.status == 200) {
      return result
    } else {
      throw result
    }
  } catch (error: unknown) {
    dispatch(setLoading(false))
    const errorMessage = (error as Error)?.message || 'An error occurred.'
    dispatch(setMessage({ text: errorMessage, type: AlertEnum.Error }))
    throw error
  }
})

export const softDeleteCategory: any = createAsyncThunk('softDeleteCategory', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await SoftDeleteCategoryAPI(values)
    dispatch(setLoading(false))
    if (result?.status == 200) {
      dispatch(getAllCategory());
      return result
    } else {
      throw result
    }
  } catch (error: unknown) {
    dispatch(setLoading(false))
    const errorMessage = (error as Error)?.message || 'An error occurred.'
    dispatch(setMessage({ text: errorMessage, type: AlertEnum.Error }))
    throw error
  }
})

export const hardDeleteCategory: any = createAsyncThunk('hardDeleteCategory', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await HardDeleteCategoryAPI(values)
    dispatch(setLoading(false))
    if (result?.status == 200) {
      dispatch(getAllCategory());
      return result
    } else {
      throw result
    }
  } catch (error: unknown) {
    dispatch(setLoading(false))
    const errorMessage = (error as Error)?.message || 'An error occurred.'
    dispatch(setMessage({ text: errorMessage, type: AlertEnum.Error }))
    throw error
  }
})

export const getAllActiveCategories: any = createAsyncThunk('getAllActiveCategories', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await GetAllActiveCategoriesAPI(values)
    dispatch(setLoading(false))
    if (result?.status == 200) {
      return result
    } else {
      throw result
    }
  } catch (error: unknown) {
    dispatch(setLoading(false))
    const errorMessage = (error as Error)?.message || 'An error occurred.'
    dispatch(setMessage({ text: errorMessage, type: AlertEnum.Error }))
    throw error
  }
})

export const CategorySlice = createSlice({
  name: 'CategorySlice',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(createCategory.fulfilled, (state, action) => {
      state.CreateCategory = action.payload
    })
    builder.addCase(getAllCategory.fulfilled, (state, action) => {
      state.GetAllCategory = action.payload
    })
    builder.addCase(softDeleteCategory.fulfilled, (state, action) => {
      state.SoftDeleteCategory = action.payload
    })
    builder.addCase(hardDeleteCategory.fulfilled, (state, action) => {
      state.HardDeleteCategory = action.payload
    })
    builder.addCase(updateCategory.fulfilled, (state, action) => {
      state.UpdateCategory = action.payload
    })
    builder.addCase(getCategoryById.fulfilled, (state, action) => {
      state.GetCategoryById = action.payload
    })
    builder.addCase(getAllActiveCategories.fulfilled, (state, action) => {
      state.ActiveCategories = action.payload
    })
  }
})

// export const {} = CategorySlice.actions
export default CategorySlice.reducer
