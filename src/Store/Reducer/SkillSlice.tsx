import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { setLoading, setMessage } from './LayoutSice'
import { AuthType } from 'src/@core/utils/TYPES'
import {
  CreateSkillsAPI,
  getAllSkill,
  getSkillById,
  hardDeleteSkill,
  softDeleteSkill,
  updateSkillAPI
} from 'src/Apis/Services'
import { AlertEnum } from 'src/@core/utils/Enums'

const initialState = {
  CreateSkill: {
    data: []
  },
  getSkill: {
    data: []
  },
  UpdateSkill: {
    data: []
  },
  SoftDeleteskill: {
    data: []
  },
  HardDeleteskill: {
    data: []
  },
  GetSkillById: {
    data: []
  }
}

export const createSkill: any = createAsyncThunk('createSkill', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await CreateSkillsAPI(values)
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
export const GetAllSkill: any = createAsyncThunk('GetAllSkill', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await getAllSkill(values)
    dispatch(setLoading(false))

    console.log('sdv', result)
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

export const updateSkill: any = createAsyncThunk('updateSkill', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await updateSkillAPI(values)
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

export const getSKillId: any = createAsyncThunk('getSKillId', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await getSkillById(values)
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

export const SoftDeleteSkill: any = createAsyncThunk('SoftDeleteSkill', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await softDeleteSkill(values)
    dispatch(setLoading(false))
    if (result?.status == 200) {
      dispatch(createSkill( ))
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

export const HardDeleteSkill: any = createAsyncThunk('HardDeleteSkill', async (values, { dispatch }) => {
  try {
    dispatch(setLoading(true))
    const result = await hardDeleteSkill(values)
    dispatch(setLoading(false))
    if (result?.status == 200) {
      dispatch(createSkill( ))
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

export const skillSlice = createSlice({
  name: 'SkillSlice',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(GetAllSkill.fulfilled, (state, action) => {
      // console.log(action.payload)
      state.getSkill = action.payload
    })
    builder.addCase(createSkill.fulfilled, (state, action) => {
      // console.log(action.payload)
      state.CreateSkill = action.payload
    })
    builder.addCase(updateSkill.fulfilled, (state, action) => {
      state.UpdateSkill = action.payload
    })
    builder.addCase(getSKillId.fulfilled, (state, action) => {
      state.GetSkillById = {
        data:action.payload.data.data
      }
    })
    builder.addCase(SoftDeleteSkill.fulfilled, (state, action) => {
      state.SoftDeleteskill = action.payload
    })
    builder.addCase(HardDeleteSkill.fulfilled, (state, action) => {
      state.HardDeleteskill = action.payload
    })

  }
})

// export const {} = skillSlice.actions

export default skillSlice.reducer
