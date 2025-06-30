import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type Group = {
  id: string;
  name: string;
  menus: string[];
};

interface GroupState {
  groups: Group[];
}

const initialState: GroupState = {
  groups: JSON.parse(localStorage.getItem('cms-groups') || '[]'),
};

const groupSlice = createSlice({
  name: 'group',
  initialState,
  reducers: {
    setGroups: (state, action: PayloadAction<Group[]>) => {
      state.groups = action.payload;
      localStorage.setItem('cms-groups', JSON.stringify(state.groups));
    },
    addGroup: (state, action: PayloadAction<Group>) => {
      state.groups.push(action.payload);
      localStorage.setItem('cms-groups', JSON.stringify(state.groups));
    },
    deleteGroup: (state, action: PayloadAction<string>) => {
      state.groups = state.groups.filter(g => g.id !== action.payload);
      localStorage.setItem('cms-groups', JSON.stringify(state.groups));
    },
    addMenu: (state, action: PayloadAction<{ groupId: string; menu: string }>) => {
      const group = state.groups.find(g => g.id === action.payload.groupId);
      if (group) {
        group.menus.push(action.payload.menu);
        localStorage.setItem('cms-groups', JSON.stringify(state.groups));
      }
    },
    deleteMenu: (state, action: PayloadAction<{ groupId: string; menu: string }>) => {
      const group = state.groups.find(g => g.id === action.payload.groupId);
      if (group) {
        group.menus = group.menus.filter(m => m !== action.payload.menu);
        localStorage.setItem('cms-groups', JSON.stringify(state.groups));
      }
    },
  },
});

export const { setGroups, addGroup, deleteGroup, addMenu, deleteMenu } = groupSlice.actions;
export default groupSlice.reducer;
