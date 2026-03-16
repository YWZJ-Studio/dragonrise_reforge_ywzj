const missiles = ["AKD10-1", "AKD10-5", "AKD10-2", "AKD10-6", "AKD10-3", "AKD10-7", "AKD10-4", "AKD10-8"]

function updateBones(context) {
    const previousPropellerRotation = context.getFloat("propellerRotation", 0);
    const propellerRotation = (previousPropellerRotation + context.getPower() / 5) % 360;
    context.setFloat("propellerRotation", propellerRotation)

    const builder = createPoseBuilder();
    builder.setRotation("propeller", 0, -propellerRotation, 0);
    builder.setRotation("tailPropeller", -propellerRotation * 5, 0, 0);
    builder.setRotation("lightboll", 0, -context.getPartYRot("sighting_system"), 0);
    builder.setRotation("boll", context.getPartXRot("sighting_system"), 0, 0);
    builder.setRotation("turret", 0, -context.getPartYRot("auto_cannon"), 0);
    builder.setRotation("barrel", -context.getPartXRot("auto_cannon"), 0, 0);
    let remainMissiles = context.getWeaponRemainAmmo("sighting_system", 1)
    for (let i = 0; i < missiles.length; i++) {
        if (i < missiles.length - remainMissiles) {
            builder.hideBone(missiles[i])
        }
    }
    return builder;
}