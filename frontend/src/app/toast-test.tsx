import { toast } from 'react-toastify'

export const toastTest = () => {
	return toast.info(
		<p className='whitespace-pre-wrap ml-4 mr-2 cursor-text'>
			{
				'Тестовые данные для входа в аккаунт:\nНикнейм: Mark_Keinsize\nПароль: 12345678'
			}
		</p>,
		{
			autoClose: 10000,
			hideProgressBar: false,
			closeOnClick: false,
			draggable: false,
			toastId: 'greeting'
		}
	)
}
