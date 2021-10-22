export const config = {
  "dev": {
    "username": process.env.POSTGRES_USERNAME,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DATABASE,
    "host": process.env.POSTGRES_HOST,
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET
  },
  "prod": {
    "username": process.env.POSTGRES_USERNAME_PROD,
    "password": process.env.POSTGRES_PASSWORD_PROD,
    "database": process.env.POSTGRES_DATABASE_PROD,
    "host": process.env.POSTGRES_HOST_PROD,
    "aws_region": process.env.AWS_REGION_PROD,
    "aws_profile": process.env.AWS_PROFILE_PROD,
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET_PROD
  },
  "jwt": {
    "secret": process.env.JWT_SECRET
  }
}
