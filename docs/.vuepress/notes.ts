import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: zh-CN ======================= */

const zhDemoNote = defineNoteConfig({
  dir: 'pydantic',
  link: '/pydantic',
  sidebar: ['', 'foo', 'bar'],
})

export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [zhDemoNote],
})

/* =================== locale: en-US ======================= */

const enDemoNote = defineNoteConfig({
  dir: 'pydantic',
  link: '/pydantic',
  sidebar: ['', 'foo', 'bar'],
})

export const enNotes = defineNotesConfig({
  dir: 'en/notes',
  link: '/en/',
  notes: [enDemoNote],
})

