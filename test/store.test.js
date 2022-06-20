const app = require('../app.js')
const request = require('supertest')
const db = require('../models/index')
describe("Manage store testing api", () =>{
    it("Should return json data inlcude store list of owner", async () => {
        const res = await request(app).get('/store_owner/manage_store')
        expect(res.body.type).toBe('success')
    })

    it("Should return status code 400", async () => {
        const res = await request(app).post('/store_owner/manage_store/create')
        expect(res.statusCode).toBe(400)
    })

    it("Should return status code 200", async () => {
        const res = await request(app)
                                .post('/store_owner/manage_store/create')
                                .send({
                                    name: 'DienMayXanh',
                                    address: 'Da Nang',
                                    phoneNumber: '01234568987'
                                })

        expect(res.statusCode).toBe(200)
    }) 
})
afterAll(async() => {
    await db.sequelize.close();
});