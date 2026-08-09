import type { OrbitingElementConfig } from "./types";

export const solarElements: OrbitingElementConfig[] = [
	{
		orbit: {
			orbitRadius: 5.4,
			rotationSpeed: 0.12,
			orbitOffsetPlaneRotationOffset: 3,
		},
		planet: {
			size: 0.5,
			color: "#d9b38a",
			textureMap: "/projects/2k_venus_surface.jpg",
			atmosphereColor: "#edd0aa",
			atmosphereIntensity: 1.3,
			selfRotationSpeed: 0.45,
			project: {
				id: "routed",
				name: "Routed - Travel Partner Matcher",
				description:
					"Microservices-based platform that matches travelers using geospatial overlap, preferences, and behavioral signals with event-driven processing.",
				techStack: [
					"FastAPI",
					"PostgreSQL",
					"PostGIS",
					"Kafka",
					"MongoDB",
					"Docker",
					"Go",
				],
				tags: ["Distributed Systems", "Matching Engine", "GeoSpatial"],
				links: [
					{ label: "Source", url: "https://github.com/hemaangsood" },
				],
			},
		},
	},
	{
		orbit: {
			orbitRadius: 8.55,
			rotationSpeed: 0.07,
			orbitSegments: 48,
			orbitOffsetPlaneRotationOffset: -2,
		},
		planet: {
			size: 0.6,
			color: "#b85f44",
			textureMap: "/projects/red-rock.jpg",
			atmosphereColor: "#d77a63",
			atmosphereIntensity: 1.05,
			selfRotationSpeed: 0.33,
			project: {
				id: "smart-lock",
				name: "Face + Voice Smart Lock",
				description:
					"Biometric authentication system combining facial recognition and speech verification using Siamese networks for robust access control.",
				techStack: [
					"PyTorch",
					"OpenCV",
					"YOLO",
					"Raspberry Pi",
					"REST APIs",
				],
				tags: ["Computer Vision", "Security", "ML"],
				links: [],
			},
			moons: [
				{
					orbit: {
						orbitRadius: 1.0,
						rotationSpeed: 0.2,
						orbitSegments: 24,
						eccentricity: 0.3,
						orbitOffsetPlaneRotationOffset: 0,
						renderOrbit: true,
					},
					moonSelfRotationSpeed: 0.1,
					planet: {
						size: 0.2,
						color: "#888888",
						textureMap: "/projects/moon.jpg",
						useAtmosphere: false,
					},
				},
			],
		},
	},
	{
		orbit: {
			orbitRadius: 12.15,
			rotationSpeed: 0.05,
			orbitSegments: 64,
			eccentricity: 0.06,
			orbitOffsetPlaneRotationOffset: 0,
		},
		planet: {
			size: 0.46,
			color: "#4a78b8",
			textureMap: "/projects/green-water.jpg",
			atmosphereColor: "#89c9ff",
			atmosphereIntensity: 1.22,
			selfRotationSpeed: 0.22,
			project: {
				id: "chat-app",
				name: "Encrypted Chat System",
				description:
					"End-to-end encrypted chat application using AES-256 with secure authentication and real-time messaging architecture.",
				techStack: [
					"MongoDB",
					"Express",
					"React",
					"Node.js",
					"NextAuth",
				],
				tags: ["Security", "Real-time", "Full Stack"],
				links: [],
			},
		},
		asteroidBelts: [
			{
				orbitRadius: 0.6,
				count: 300,
				height: 0,
				size: 0.015,
				thickness: 0.1,
				eccentricity: 0.2,
			},
		],
	},
	{
		orbit: {
			orbitRadius: 15.75,
			rotationSpeed: 0.035,
			orbitSegments: 80,
			eccentricity: -0.1,
			orbitOffsetPlaneRotationOffset: 1.8,
		},
		planet: {
			size: 1.0,
			color: "#d2b08a",
			textureMap: "/projects/2k_jupiter.jpg",
			atmosphereColor: "#e6c49f",
			atmosphereIntensity: 1.5,
			selfRotationSpeed: 0.38,
			project: {
				id: "stock-ml",
				name: "Stock Prediction Engine",
				description:
					"Hybrid time-series prediction system combining LSTM, GRU, and CNN models with macroeconomic indicators for market trend analysis.",
				techStack: ["PyTorch", "Python", "AWS", "Pandas"],
				tags: ["Machine Learning", "Time Series", "Forecasting"],
				links: [],
			},
		},
		asteroidBelts: [
			{
				orbitRadius: 1.5,
				count: 300,
				height: 0.01,
				size: 0.02,
				thickness: 0.5,
				eccentricity: 0,
			},
		],
	},
	{
		orbit: {
			orbitRadius: 18,
			rotationSpeed: 0.015,
			orbitSegments: 120,
			eccentricity: -0.04,
			orbitOffsetPlaneRotationOffset: -3,
		},
		planet: {
			size: 0.64,
			color: "#79a6c9",
			textureMap: "/projects/gray-bubble.jpg",
			atmosphereColor: "#b9d7ef",
			atmosphereIntensity: 1.08,
			selfRotationSpeed: 0.16,
			project: {
				id: "resume-builder",
				name: "Resume Builder",
				description:
					"Built an AI-powered resume optimization tool that parses LaTeX resumes, tailors content to job descriptions, and generates polished, job-specific resume output.",
				tags: ["OpenAI API", "Python", "LaTeX"],
				links: [],
			},
		},
	},
	{
		orbit: {
			orbitRadius: 19.8,
			rotationSpeed: 0.024,
			orbitSegments: 96,
			eccentricity: 0.08,
			orbitOffsetPlaneRotationOffset: 4,
		},
		planet: {
			size: 0.82,
			color: "#d9c37a",
			textureMap: "/projects/orange-details-moon-texture-concept.jpg",
			atmosphereColor: "#f1e2a9",
			atmosphereIntensity: 1.2,
			selfRotationSpeed: 0.19,
			project: {
				id: "smart-wheelchair",
				name: "Gesture-Controlled Wheelchair",
				description:
					"BLE-controlled omni-directional wheelchair using real-time hand gesture recognition with MediaPipe and OpenCV.",
				techStack: ["OpenCV", "MediaPipe", "Arduino", "Python", "BLE"],
				tags: ["IoT", "Computer Vision", "Embedded Systems"],
				links: [],
			},
			moons: [
				{
					orbit: {
						orbitRadius: 1.7,
						rotationSpeed: 0.18,
						eccentricity: 0.1,
						orbitOffsetPlaneRotationOffset: 0,
						renderOrbit: true,
					},
					moonSelfRotationSpeed: 0.12,
					planet: {
						size: 0.15,
						color: "#aaaaaa",
						textureMap: "/projects/europa.jpg",
						useAtmosphere: false,
					},
				},
				{
					orbit: {
						orbitRadius: 1.4,
						rotationSpeed: 0.18,
						eccentricity: 0.1,
						orbitOffsetPlaneRotationOffset: 90,
						renderOrbit: true,
					},
					moonSelfRotationSpeed: 0.12,
					planet: {
						size: 0.1,
						color: "#aaaaaa",
						textureMap: "/projects/moon.jpg",
						useAtmosphere: false,
					},
				},
			],
		},
	},
	{
		orbit: {
			orbitRadius: 23.2,
			rotationSpeed: 0.02,
			orbitSegments: 128,
			eccentricity: 0.03,
			orbitOffsetPlaneRotationOffset: -1.5,
		},
		planet: {
			size: 0.92,
			color: "#78b7b1",
			textureMap: "/projects/paint-canvas.jpg",
			atmosphereColor: "#9ed9d3",
			atmosphereIntensity: 1.18,
			selfRotationSpeed: 0.21,
			project: {
				id: "virtual-poct-qc",
				name: "Virtual POCT - AI Quality Control Assistant",
				description:
					"Full-stack AI-powered quality control platform for point-of-care testing with real-time conversational troubleshooting, deterministic QC evaluation, and auditable compliance workflows.",
				techStack: [
					"FastAPI",
					"React",
					"TypeScript",
					"PostgreSQL",
					"SQLAlchemy",
					"Docker",
					"Nginx",
					"WebSockets",
					"LangChain",
					"Langfuse",
					"Google Gemini",
					"JWT",
				],
				tags: ["Healthcare AI", "Quality Control", "Real-time"],
				links: [],
			},
		},
	},
	{
		orbit: {
			orbitRadius: 26.0,
			rotationSpeed: 0.018,
			orbitSegments: 112,
			eccentricity: 0.05,
			orbitOffsetPlaneRotationOffset: 2.5,
		},
		planet: {
			size: 0.58,
			color: "#8b9bb5",
			textureMap: "/projects/gray-bubble.jpg",
			atmosphereColor: "#b8c8df",
			atmosphereIntensity: 1.05,
			selfRotationSpeed: 0.18,
			project: {
				id: "etf-volatility",
				name: "ETF Volatility Forecasting with Regularized Regression",
				description:
					"Forecasted next-day volatility for SPY, QQQ, GLD, IWM, and TLT using 2010--2025 daily market data and engineered rolling volatility, EMA, return, volume, and statistical features. Compared OLS, Ridge, LASSO, and regression tree models using chronological train/test evaluation. Applied LASSO feature selection and extended the model with cross-asset volatility signals, achieving the strongest overall out-of-sample performance among the evaluated models.",
				techStack: [
					"R",
					"tidyquant",
					"glmnet",
					"rpart",
					"dplyr",
					"ggplot2",
					"Statistical Modeling",
					"Feature Engineering",
				],
				tags: ["Statistical Modeling", "Forecasting", "Finance"],
				links: [],
			},
		},
	},
];
