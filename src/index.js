import React from 'react'
import { createRoot } from 'react-dom/client'
import { Amplify } from 'aws-amplify'
import { AmplifyProvider } from '@aws-amplify/ui-react'
import App from './App'
import config from './aws-exports'
import './index.css'
import '@aws-amplify/ui-react/styles.css'

Amplify.configure(config)
const container = document.getElementById('root')
const root = createRoot(container)
root.render(
	<AmplifyProvider>
		<App />
	</AmplifyProvider>
)
