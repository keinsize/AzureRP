'use client'

import { createEvent, createStore } from 'effector'

export const $changeMenuState = createEvent<boolean>()
export const $menuIsOpen = createStore(false).on(
	$changeMenuState,
	(_, state) => state
)
