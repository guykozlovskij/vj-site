import { ref, computed } from 'vue'
import { locales } from '@/locales'

const currentLanguage = ref('lt')

export function useLanguage() {
	const content = computed(() => {
		return locales[currentLanguage.value]
	})

	function setLanguage(language) {
		currentLanguage.value = language
	}

	return {
		currentLanguage,
		content,
		setLanguage
	}
}