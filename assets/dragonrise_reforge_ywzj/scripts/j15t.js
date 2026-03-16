const missiles_pl_8 = ["3", "1", "4", "2"]
const missiles_pl_12 = ["pl-12-5", "pl-12-2"]
const missiles_yj = ["yj1", "yj4", "yj2", "yj3", "yj6"]

function updateBones(context) {
    const pitchInput = context.getPitchInput()
    const yawInput = context.getYawInput()
    const rollInput = context.getRollInput()

    const builder = createPoseBuilder();
    builder.setRotation("FlapRB2", -pitchInput * 16, 0, 0);
    builder.setRotation("FlapRB3", -pitchInput * 16, 0, 0);
    builder.setRotation("wingLB", pitchInput * 16, 0, 0);
    builder.setRotation("wingRB", pitchInput * 16, 0, 0);
    builder.setRotation("wingRR2", rollInput * 16, 0, 0);
    builder.setRotation("wingRR", -rollInput * 16, 0, 0);
    builder.setRotation("LeftVerticalTailInner", 0, -yawInput * 16, 0);
    builder.setRotation("RightVerticalTailInner", 0, -yawInput * 16, 0);
    builder.setRotation("ctrl", -8 * pitchInput, 0, -8 * rollInput);
    let remainMissiles = context.getWeaponRemainAmmo("sighting_system", 1)
    for (let i = 0; i < missiles_pl_8.length; i++) {
        if (i < missiles_pl_8.length - remainMissiles) {
            builder.hideBone(missiles_pl_8[i])
        }
    }
    remainMissiles = context.getWeaponRemainAmmo("sighting_system", 2)
    for (let i = 0; i < missiles_pl_12.length; i++) {
        if (i < missiles_pl_12.length - remainMissiles) {
            builder.hideBone(missiles_pl_12[i])
        }
    }
    remainMissiles = context.getWeaponRemainAmmo("sighting_system", 3)
    for (let i = 0; i < missiles_yj.length; i++) {
        if (i < missiles_yj.length - remainMissiles) {
            builder.hideBone(missiles_yj[i])
        }
    }
    return builder;
}
