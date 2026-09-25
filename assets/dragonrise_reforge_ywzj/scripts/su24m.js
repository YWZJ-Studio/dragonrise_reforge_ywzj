const missiles_kh_29 = ["kh29", "kh29-1"]
const missiles_r_60 = ["missle2", "missle3"]

function updateBones(context) {
    const pitchInput = context.getPitchInput()
    const yawInput = context.getYawInput()
    const rollInput = context.getRollInput()

    const builder = createPoseBuilder()
    builder.setRotation("elevator_left", pitchInput * 14, 0, 0)
    builder.setRotation("elevator_right", pitchInput * 14, 0, 0)
    builder.setRotation("rudder", 0, -yawInput * 14, 0)
    builder.setRotation("ctrl", -8 * pitchInput, 0, -8 * rollInput)
    builder.setRotation("ctrl2", -8 * pitchInput, 0, -8 * rollInput)
    const remainKh29 = context.getWeaponRemainAmmo("sighting_system", 1)
    for (let i = 0; i < missiles_kh_29.length; i++) {
        if (i < missiles_kh_29.length - remainKh29) {
            builder.hideBone(missiles_kh_29[i])
        }
    }
    const remainR60 = context.getWeaponRemainAmmo("sighting_system", 2)
    for (let i = 0; i < missiles_r_60.length; i++) {
        if (i < missiles_r_60.length - remainR60) {
            builder.hideBone(missiles_r_60[i])
        }
    }
    return builder
}
