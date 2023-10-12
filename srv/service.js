const cds = require('@sap/cds'); 
module.exports = cds.service.impl(async function () {
this.on('resolve', async (req) => {
const tx = cds.tx(req);
await tx.run(
UPDATE('Escalations')
.set({ 'Status_code': 'CMP' })
.where({ ID: req.params[0].ID })
);
}
)
this.on("READ", "PurchaseOrders", async (req) => {
    let srv = await cds.connect.to("API_PURCHASEORDER_PROCESS_SRV");
    let result = await srv.tx(req).send(
        {
            query: req.query,
            headers: {
                apiKey: process.env.apiKey
            }
        }
    );
    return result;
});
});