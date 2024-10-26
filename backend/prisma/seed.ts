import { PrismaClient } from '@prisma/client'
import { hash } from 'argon2'
const prisma = new PrismaClient()

async function up() {
	await prisma.server.createMany({
		data: [
			{
				name: 'Red',
				color: '#FF0000'
			},
			{
				name: 'White',
				color: '#FFFFFF'
			}
		]
	})

	await prisma.car.createMany({
		data: [
			{
				name: 'BMW M5 F90'
			},
			{
				name: 'Audi R8'
			}
		]
	})

	await prisma.house.create({
		data: {
			type: 'Особняк'
		}
	})

	await prisma.business.create({
		data: {
			name: 'Закусочная'
		}
	})

	await prisma.player.create({
		data: {
			nickname: 'Mark_Keinsize',
			password: await hash('12345678'),
			house: { connect: { id: 1 } },
			business: { connect: { id: 1 } },
			car: {
				connect: [{ id: 1 }, { id: 2 }]
			},
			serverId: 1,
			donate: 1200,
			money: 53014998,
			wanted: 3,
			level: 31
		}
	})
}

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "server" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "player" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "house" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "car" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "business" RESTART IDENTITY CASCADE`
}

async function main() {
	try {
		await down()
		await up()
	} catch (e) {
		console.error(e)
	}
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
