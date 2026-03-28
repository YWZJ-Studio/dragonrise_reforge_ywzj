const missiles_aim_54 = ["cow2", "cow1", "cow5", "cow3", "cow4", "cow6"]
const missiles_aim_9 = ["missile1", "missile2"]

function updateBones(context) {
    const pitchInput = context.getPitchInput()
    const yawInput = context.getYawInput()
    const rollInput = context.getRollInput()

    const builder = createPoseBuilder();
    builder.setRotation("wingLB", pitchInput * 16 + rollInput * 4, 0, 0);
    builder.setRotation("wingRB", pitchInput * 16 - rollInput * 4, 0, 0);
    if (rollInput < 0) {
        builder.setRotation("WhigLB", rollInput * 16, 0, 0);
    } else if (rollInput > 0) {
        builder.setRotation("WhigRB", -rollInput * 16, 0, 0);
    }
    builder.setRotation("weiyiL", 0, -yawInput * 16, 0);
    builder.setRotation("weiyiR", 0, -yawInput * 16, 0);
    builder.setRotation("ctrl", -8 * pitchInput, 0, -8 * rollInput);
    let remainMissiles = context.getWeaponRemainAmmo("sighting_system", 1)
    for (let i = 0; i < missiles_aim_54.length; i++) {
        if (i < missiles_aim_54.length - remainMissiles) {
            builder.hideBone(missiles_aim_54[i])
        }
    }
    remainMissiles = context.getWeaponRemainAmmo("sighting_system", 2)
    for (let i = 0; i < missiles_aim_9.length; i++) {
        if (i < missiles_aim_9.length - remainMissiles) {
            builder.hideBone(missiles_aim_9[i])
        }
    }
    return builder;
}
