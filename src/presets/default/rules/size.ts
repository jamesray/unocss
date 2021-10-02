import { h } from '../../../utils'
import { MiniwindRule } from '../../../types'

export const sizes: MiniwindRule[] = [
  ['w-full', { width: '100%' }],
  ['h-full', { height: '100%' }],
  ['w-screen', { width: '100vw' }],
  ['h-screen', { height: '100vh' }],
  [/^w-([^-]+)$/, ([, s]) => ({ width: h.bracket.fraction.size(s) })],
  [/^h-([^-]+)$/, ([, s]) => ({ height: h.bracket.fraction.size(s) })],
  [/^max-w-([^-]+)$/, ([, s]) => ({ 'max-width': h.bracket.fraction.size(s) })],
  [/^max-h-([^-]+)$/, ([, s]) => ({ 'max-height': h.bracket.fraction.size(s) })],
]